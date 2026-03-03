<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProductResource\Pages;
use App\Filament\Resources\ProductResource\RelationManagers;
use App\Models\Product;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ProductResource extends Resource
{
    protected static ?string $model = Product::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Product Details')->schema([
                    Forms\Components\TextInput::make('name')
                        ->required()
                        ->maxLength(255)
                        ->live(onBlur: true)
                        ->afterStateUpdated(fn (string $operation, $state, Forms\Set $set) => $operation === 'create' ? $set('slug', \Illuminate\Support\Str::slug($state)) : null),
                    Forms\Components\TextInput::make('slug')
                        ->required()
                        ->maxLength(255)
                        ->unique(Product::class, 'slug', ignoreRecord: true),

                    Forms\Components\Textarea::make('description')
                        ->columnSpanFull(),
                    Forms\Components\FileUpload::make('cover_image')
                        ->image()
                        ->directory('products')
                        ->disk('public'),
                ]),
                Forms\Components\Section::make('Sections')->schema([
                    Forms\Components\Repeater::make('sections')
                        ->relationship()
                        ->itemLabel(fn (array $state): ?string => $state['title'] ?? null)
                        ->schema([
                            Forms\Components\TextInput::make('title')->required(),
                            Forms\Components\Select::make('slug')
                                ->options([
                                    'pembuka' => 'Pembuka',
                                    'identitas' => 'Identitas & Latar Budaya',
                                    'bahan' => 'Bahan Baku',
                                    'proses' => 'Proses Pembuatan',
                                    'ipas' => 'Konsep IPAS',
                                    'dampak' => 'Dampak & Tanggung Jawab',
                                ])->required(),
                            Forms\Components\RichEditor::make('content')
                                ->fileAttachmentsDirectory('sections/attachments')
                                ->fileAttachmentsDisk('public')
                                ->saveUploadedFileAttachmentsUsing(function ($file) {
                                    // Resize proportionally — max 1280px on longest side
                                    $maxSide = 1280;

                                    $tmpPath = $file->getRealPath();
                                    $mime    = $file->getMimeType();

                                    // Create GD image from uploaded file
                                    $src = match (true) {
                                        str_contains($mime, 'png')  => imagecreatefrompng($tmpPath),
                                        str_contains($mime, 'gif')  => imagecreatefromgif($tmpPath),
                                        str_contains($mime, 'webp') => imagecreatefromwebp($tmpPath),
                                        default                     => imagecreatefromjpeg($tmpPath),
                                    };

                                    $srcW = imagesx($src);
                                    $srcH = imagesy($src);

                                    // Calculate new size keeping aspect ratio
                                    if ($srcW >= $srcH) {
                                        // Landscape or square
                                        $targetW = $maxSide;
                                        $targetH = (int) round($srcH * ($maxSide / $srcW));
                                    } else {
                                        // Portrait
                                        $targetH = $maxSide;
                                        $targetW = (int) round($srcW * ($maxSide / $srcH));
                                    }

                                    // Create output canvas
                                    $dst = imagecreatetruecolor($targetW, $targetH);

                                    // Preserve transparency for PNG/GIF
                                    if (str_contains($mime, 'png') || str_contains($mime, 'gif')) {
                                        imagealphablending($dst, false);
                                        imagesavealpha($dst, true);
                                        $transparent = imagecolorallocatealpha($dst, 0, 0, 0, 127);
                                        imagefilledrectangle($dst, 0, 0, $targetW, $targetH, $transparent);
                                        imagealphablending($dst, true);
                                    }

                                    // Resample into new size
                                    imagecopyresampled($dst, $src, 0, 0, 0, 0, $targetW, $targetH, $srcW, $srcH);

                                    // Save to temp file then move to storage
                                    $filename = 'sections/attachments/' . uniqid('img_', true) . '.jpg';
                                    $tempOut  = tempnam(sys_get_temp_dir(), 'filament_attach_');

                                    imagejpeg($dst, $tempOut, 90);
                                    imagedestroy($src);
                                    imagedestroy($dst);

                                    \Illuminate\Support\Facades\Storage::disk('public')
                                        ->putFileAs(
                                            'sections/attachments',
                                            new \Illuminate\Http\File($tempOut),
                                            basename($filename),
                                        );

                                    @unlink($tempOut);

                                    return $filename;
                                }),
                            Forms\Components\FileUpload::make('image')
                                ->image()
                                ->directory('sections')
                                ->disk('public'),
                            Forms\Components\TextInput::make('video_url')->label('Youtube Video URL'),
                        ])
                        ->orderColumn('sort_order')
                        ->collapsed(),
                ]),

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('slug')
                    ->searchable(),
                Tables\Columns\ImageColumn::make('cover_image'),

                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProducts::route('/'),
            'create' => Pages\CreateProduct::route('/create'),
            'edit' => Pages\EditProduct::route('/{record}/edit'),
        ];
    }
}
