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
                            Forms\Components\RichEditor::make('content'),
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
