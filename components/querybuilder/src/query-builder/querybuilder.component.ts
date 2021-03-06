import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { QueryBuilder } from '@syncfusion/ej2-querybuilder';

import { ColumnsDirective } from './columns.directive';

export const inputs: string[] = ['allowValidation','columns','cssClass','dataSource','displayMode','enableNotCondition','enablePersistence','enableRtl','height','immediateModeDelay','locale','matchCase','maxGroupCount','rule','showButtons','sortDirection','summaryView','width'];
export const outputs: string[] = ['beforeChange','change','created','ruleChange'];
export const twoWays: string[] = [''];

/**
 * Represents the EJ2 Angular QueryBuilder Component.
 * ```html
 * <ejs-querybuilder></ejs-querybuilder>
 * ```
 */
@Component({
    selector: 'ejs-querybuilder',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childColumns: new ContentChild(ColumnsDirective)
    }
})
@ComponentMixins([ComponentBase])
export class QueryBuilderComponent extends QueryBuilder implements IComponentBase {
    public context : any;
    public tagObjects: any;
    public childColumns: QueryList<ColumnsDirective>;
    public tags: string[] = ['columns'];


    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];

        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context  = new ComponentBase();
    }

    public ngOnInit() {
        this.context.ngOnInit(this);
    }

    public ngAfterViewInit(): void {
        this.context.ngAfterViewInit(this);
    }

    public ngOnDestroy(): void {
        this.context.ngOnDestroy(this);
    }

    public ngAfterContentChecked(): void {
        this.tagObjects[0].instance = this.childColumns;
        this.context.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

