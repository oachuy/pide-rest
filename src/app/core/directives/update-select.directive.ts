import { Directive, ElementRef, Output, EventEmitter, OnChanges } from '@angular/core';

declare var $: any;

@Directive({
  selector: '[appUpdateSelect]'
})
export class UpdateSelectDirective {

	private changes: MutationObserver;

	@Output()
	public domChange = new EventEmitter();

	constructor(private elementRef: ElementRef) {
	    const element = this.elementRef.nativeElement;

	    this.changes = new MutationObserver((mutations: MutationRecord[]) => {
			$(this.elementRef.nativeElement).trigger('chosen:updated');
			//console.log($(".chosen-select"));
			//$(".chosen-select").trigger('chosen:updated');
	    });

	    this.changes.observe(element, {
	      attributes: true,
	      childList: true,
	      characterData: true
	    });
	}

  /*ngOnInit(){
  	console.log("aupdated");
  	
  }*/
}
