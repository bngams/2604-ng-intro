import { NgModule } from "@angular/core";
import { MATERIAL_MODULES } from "./material";

@NgModule({
  // internal module logic
  // declarations: [],
  // imports: [],

  // public API
  exports: [
    // MatToolbarModule,
    // MatButtonModule,
    ...MATERIAL_MODULES
  ]
})
export class UIModule { }
