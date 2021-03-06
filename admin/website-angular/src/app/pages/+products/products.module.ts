import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { ThemeModule } from '../../@theme';
import { ToasterModule } from 'angular2-toaster';
import { TranslateModule } from '@ngx-translate/core';
import { HighlightModule } from 'ngx-highlightjs';
import { FileUploadModule } from 'ng2-file-upload';
import { ProductsComponent } from './products.component';
import { CategoriesComponent } from './+categories/categories.component';
import { ProductCreateModule } from '../../@shared/product/product-create';
import { ProductFormsModule } from '../../@shared/product/forms';
import { CategoryCreateComponent } from '../../@shared/product/categories/category-create';
import { CategoryEditComponent } from '../../@shared/product/categories/category-edit/category-edit.component';
import { NbSpinnerModule } from '@nebular/theme';
import { NotifyService } from 'app/@core/services/notify/notify.service';
import { ConfirmationModalModule } from '../../@shared/confirmation-modal/confirmation-modal.module';
import { CategoryImageComponent } from 'app/@shared/product/categories/categories-table/category-image.component';

const routes: Routes = [
	{
		path: 'list',
		component: ProductsComponent
	},
	{
		path: 'categories',
		component: CategoriesComponent
	},
	{
		path: 'list/:id',
		loadChildren: './+product/product.module#ProductModule'
	}
];

@NgModule({
	imports: [
		CommonModule,
		ThemeModule,
		ToasterModule.forRoot(),
		RouterModule.forChild(routes),
		TranslateModule.forChild(),
		FileUploadModule,
		HighlightModule.forRoot({ theme: 'github' }),
		ProductCreateModule,
		ProductFormsModule,
		NbSpinnerModule,
		ConfirmationModalModule
	],
	declarations: [
		ProductsComponent,
		CategoryCreateComponent,
		CategoryEditComponent,
		CategoriesComponent,
		CategoryImageComponent
	],
	entryComponents: [
		CategoryCreateComponent,
		CategoryEditComponent,
		CategoryImageComponent
	],
	providers: [JsonPipe, NotifyService]
})
export class ProductsModule {
	public static routes = routes;
}
