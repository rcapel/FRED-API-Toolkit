//import { SourcesComponent } from "./sources.component";
//import { ISourceContainer, ISource } from "../../../fredapi/sources/source.interfaces";

//describe("SourcesComponent", () => {
//  let component: SourcesComponent;
//  let mockActivatedRoute;
//  let data;
  
//  beforeEach(() => {
//    mockActivatedRoute = jasmine.createSpyObj(["parseData"]);
//    component = new SourcesComponent(mockActivatedRoute);

//    data = {};
//    data.container = {};
//    data.container.realtime_start = new Date("2013-08-14");
//    data.container.realtime_end = new Date("2013-08-14");
//    data.container.order_by = 0;
//    data.container.sort_order = 0;
//    data.container.count = 58;
//    data.container.offset = 0;
//    data.container.limit = 0;
//    data.container.sources = [
//      {
//        id: 1,
//        realtime_start: new Date("2013-08-14"),
//        realtime_end: new Date("2013-08-14"),
//        name: "",
//        link: ""
//      }
//    ];
//    data.fetchMessage = "";
//    data.url = "https://api.stlouisfed.org/fred/sources?api_key=abcdefghijklmnopqrstuvwxyz123456";
//  });

//  it("parseData method should result in instance containing correct data", () => {

//    component.parseData(data);

//    expect(component.container.realtime_start).toEqual(new Date("2013-08-14"));
//    expect(component.container.realtime_end).toEqual(new Date("2013-08-14"));
//    expect(component.container.order_by).toBe(0);
//    expect(component.container.sort_order).toBe(0);
//    expect(component.container.count).toBe(58);
//    expect(component.container.offset).toBe(0);
//    expect(component.container.limit).toBe(0);
//    expect(component.response.fetchMessage).toBe("");
//    expect(component.response.url).toBe("https://api.stlouisfed.org/fred/sources?api_key=abcdefghijklmnopqrstuvwxyz123456");
//  });

//})
