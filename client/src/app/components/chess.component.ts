import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgxChessBoardView } from 'ngx-chess-board'

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.css']
})
export class ChessComponent implements AfterViewInit {

	@ViewChild('board')
	board!: NgxChessBoardView 

	ngAfterViewInit(): void {
		//this.board.reverse()
	}

	moved(move: any) {
		console.info('>>>> move: ', move)
	}

}
