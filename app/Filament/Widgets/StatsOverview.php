<?php

namespace App\Filament\Widgets;

use App\Models\Glossary;
use App\Models\Product;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverview extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Total Materi', Product::count())
                ->description('Jumlah materi pembelajaran')
                ->descriptionIcon('heroicon-m-book-open')
                ->color('primary'),
            Stat::make('Total Glosarium', Glossary::count())
                ->description('Jumlah istilah dalam kamus')
                ->descriptionIcon('heroicon-m-rectangle-stack')
                ->color('success'),
        ];
    }
}
