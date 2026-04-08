import { NgModule } from "@angular/core";
import { MATERIAL_MODULES } from "./material";

@NgModule({
  // internal module logic
  // declarations: [],
  // imports: [],
  
  // public API
  exports: [
    ...MATERIAL_MODULES
  ]
})
export class MaterialModule { }
