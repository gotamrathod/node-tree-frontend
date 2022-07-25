import { NestedTreeControl } from "@angular/cdk/tree";
import { MatTreeNestedDataSource, MatTree } from "@angular/material/tree";

export interface Node {
  name?: string;
  id?: string,
  parent?:string,
  children?: Node[];
}
  
export class TreeDataSource extends MatTreeNestedDataSource<Node> {
  constructor(
    private treeControl: NestedTreeControl<Node>,
    intialData: Node[]
  ) {
    super();
    this._data.next(intialData);
  }
  moveExpansionState(from: Node, to: Node) {
    if (this.treeControl.isExpanded(from)) {
      console.log(`'${from.name}' was expanded, setting expanded on new node`);
      this.treeControl.collapse(from);
      this.treeControl.expand(to);
    }
  }
}