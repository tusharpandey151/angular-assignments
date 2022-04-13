import { Component, OnInit , EventEmitter, Output, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output("blpCreated") blueprintCreated = new EventEmitter<{blueprintName:string, blueprintContent:string}>();
  @Output("srvCreated") serverCreated = new EventEmitter<{serverName:string, serverContent:string}>(); 
  constructor() { }

  ngOnInit(): void {
  }
  

  @ViewChild('serverContent') newServerContent: ElementRef;
  
  onAddServer(serverName : HTMLInputElement) {
    this.serverCreated.emit ({
      serverName: serverName.value,
      serverContent: this.newServerContent.nativeElement.value
    })
  }

  onAddBlueprint(serverName : HTMLInputElement) {
    this.blueprintCreated.emit({
      blueprintName: serverName.value,
      blueprintContent: this.newServerContent.nativeElement.value
    })
  }
}
