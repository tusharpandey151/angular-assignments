import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  editMode : boolean ; 
  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.editMode = params['id']!=null;
        console.log(this.editMode + ' Edit Mode');
      }
    )
  }



}
