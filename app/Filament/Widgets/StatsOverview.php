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
                ->description('Materi budaya Madura')
                ->descriptionIcon('heroicon-m-book-open')
                ->color('primary')
                ->chart([7, 2, 10, 3, 15, 4, 17]),
            Stat::make('Total Glosarium', Glossary::count())
                ->description('Istilah dalam kamus')
                ->descriptionIcon('heroicon-m-rectangle-stack')
                ->color('success')
                ->chart([15, 4, 10, 2, 12, 4, 12]),
            Stat::make('Total Pengguna', \App\Models\User::count())
                ->description('Pengguna terdaftar')
                ->descriptionIcon('heroicon-m-users')
                ->color('warning')
                ->chart([3, 10, 4, 12, 2, 15, 7]),
        ];
    }
}
