import { NestedTreeControl } from "@angular/cdk/tree";
import { Component } from "@angular/core";
import { TreeDataSource, Node } from "./tree-datasource";
import { NodeService } from "./node.service";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { CreateNodeComponent } from "./create-node/create-node.component";

/**
 * @title Tree with nested nodes
 */
@Component({
  selector: "tree-nested-overview-example",
  templateUrl: "tree-nested-overview-example.html",
  styleUrls: ["tree-nested-overview-example.css"],
})
export class TreeNestedOverviewExample {
  treeControl = new NestedTreeControl<Node>((node) => node.children);
  dataSource: TreeDataSource;
  data: Node[];
  constructor(private nodeService: NodeService, private dialog: MatDialog) {}

  ngOnInit() {
    this.loadData();
  }

  hasChild = (_: number, node: Node) =>
    !!node.children && node.children.length > 0;

  addHead() {
    const obj: Node = {
      id: "0",
    };
    this.addNode(obj);
  }

  addNode(parentNode: Node) {
    debugger;
    let dialogRef = this.dialog.open(CreateNodeComponent, {
      width: "500px",
    });
    dialogRef.afterClosed().subscribe((res) => {
      let data = res;
      res.parent = parentNode.id;
      this.nodeService.createNode(data).subscribe((result: any) => {
        if (result.success) {
          alert("Node created.");
          this.loadData();
        }
      });
    });
  }
  
  loadData() {
    this.nodeService.getNode().subscribe((data: any) => {
      this.data = data.data;
      this.dataSource = new TreeDataSource(this.treeControl, data.data);
    });
  }

  remove(node: Node) {
    this.nodeService.deleteNode(node.id).subscribe((result: any) => {
      if (result.success) {
        alert("Node deleted.");
        this.loadData();
      }
    });
  }
}
