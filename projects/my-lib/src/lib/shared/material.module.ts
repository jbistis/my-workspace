import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule, } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSortModule } from '@angular/material/sort';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatSliderModule } from '@angular/material/slider';
import { OverlayModule } from '@angular/cdk/overlay';

const modules = [
    LayoutModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatGridListModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatOptionModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatStepperModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatTableModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatBadgeModule,
    MatPaginatorModule,
    MatSortModule,
    DragDropModule,
    ScrollingModule,
    MatSliderModule,
    OverlayModule
];

@NgModule({
    imports: modules,
    exports: modules,
    declarations: [],
    providers: [],
})
export class MaterialModule { }
