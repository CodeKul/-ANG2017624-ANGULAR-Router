import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
    selector: 'app-second',
    templateUrl: './second.component.html',
    styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit, OnDestroy {

    usNm: string;
    sub: Subscription;
    subQry: Subscription;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {

    }

    ngOnInit() {
        //this.usNm = this.activatedRoute.snapshot.params['usNm'];
        this.sub = this.activatedRoute.params.subscribe(prms => this.usNm = prms['usNm']);

        this.subQry = this.router.routerState.root.queryParams.subscribe(qryPrms => this.usNm += ' ' + qryPrms['ver']);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
        this.subQry.unsubscribe();
    }

    changeUsNm(usNm: string) {
        this.router.navigate(['second', usNm]);
    }
}
