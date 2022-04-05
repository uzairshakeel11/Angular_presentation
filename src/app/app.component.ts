import { HostListener, Component } from "@angular/core"; 
import { AngularContent } from './angular-content.model'; 

@Component({ selector: 'app-root',
 templateUrl: './app.component.html', 
 styleUrls: ['./app.component.css'] }) 
 
export class AppComponent {
  @HostListener('window:keyup', ['$event']) keyEvent(event: KeyboardEvent) {
      if(event.keyCode == KEY_CODE.RIGHT_ARROW && this.maxNumber>this.counter+1){
        this.onNextButtonPress(); 
      }
      if(event.keyCode == KEY_CODE.LEFT_ARROW && this.counter>0){
          this.onPreviousButtonPress(); 
      } 
    }

  Angularcontent: AngularContent[] = 
  [ new AngularContent(1,'What is Angular?', '', '<br><h4>Angular is a development platform, built on TypeScript. As a platform, Angular includes:</h4><ul><br><li><h4>A component-based framework for building scalable web applications.</h4></li><br><li><h4>A collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more.</h4></li><br><li><h4>A suite of developer tools to help you develop, build, test, and update your code.</h4></li></ul>'), 
  new AngularContent(2,'What is component?', '', '<br><h4>Components are the main building block for Angular applications. Each component consists of:</h4><ol><br><li><h4>An HTML template that declares what renders on the page.</h4></li><br><li><h4>A TypeScript class that defines behavior.</h4></li><br><li><h4>A CSS selector that defines how the component is used in a template.</h4></li><br><li><h4>Optionally, CSS styles applied to the template.</h4></li></ol>'), 
  new AngularContent(3,'Creating Components', '', '<br><br><br><br><h2 style="text-align: center;">ng generate component nameOfTheComponent</h2><br><h2 style="text-align: center;">or</h2><br><h2 style="text-align: center;">ng g c nameOfTheComponent</h2>'), 
  new AngularContent(4,'Component Decorator', '', '<h2>Selector</h2><br><h4>A selector instructs Angular to instantiate this component wherever it finds the corresponding tag in template HTML.</h4><br><img class="center border" src="../assets/image/selector1.png"><br>'), 
  new AngularContent(5,'Component Decorator', '', '<h2>Defining a component\'s template:</h2><h4>A template is a block of HTML that tells Angular how to render the component in your application.</h4><h4>Method 1 Adding external file for template</h4><img class="center border" src="../assets/image/selector2.png"><br><h4>Method 2 Adding Single line HTML</h4><img class="center border" src="../assets/image/selector3.png"><br><h4>Method 3 Using multiple lines HTML</h4><img class="center border" src="../assets/image/selector4.png"><br>'), 
  new AngularContent(6,'Component Decorator', '', '<h2>Defining a component\'s Style:</h2><br><h3>Method 1: Adding an external file</h3><img class="center border" src="../assets/image/selector5.png"/><br><h3>Method 2: Adding an incline style</h3><img class="center border" src="../assets/image/selector6.png"/>'), 
  new AngularContent(7,'Data Binding', '', '<br><h4>Data Binding means communication between TypeScript and HTML.</h4><h2>Types of Data Binding</h2><ol><li><h4>String Interpolation (TS to HTML)<h4></li><li><h4>Property Binding (TS to HTML)</h4></li><li><h4>Event Binding(HTML to TS)<h4></li></ol>'), 
  new AngularContent(8,'String Interpolation', '', '<br><h4>String interpolation lets you incorporate dynamic string values into your HTML templates.</h4><br><br><img class="center border" src="../assets/image/DB1.png"/><br><h4 style="text-align: center;"><strong>currentCustomer</strong> is declared in TypeScript file.</h4>'), 
  new AngularContent(9,'Property Binding', '', '<br><h4>Property binding in Angular helps you set values for properties of HTML elements or directives.</h4><br><br><img class="center border" src="../assets/image/DB2.png"/><br><br><h4 style="text-align: center;"><strong>itemImageUrl</strong> is declared in TypeScript file.</h4>'), 
  new AngularContent(10,'Event Binding', '', '<br><h4>Event binding lets you listen for and respond to user actions such as keystrokes, mouse movements, clicks, and touches.</h4><br><br><img class="center border" src="../assets/image/DB3.png"/><br><br><h4 style="text-align: center;"><strong>onSave()</strong> function is declared in TypeScript file.</h4>'),
  new AngularContent(11,'Two-way binding', '', '<br><h4 style="text-align: center;">Two-way binding gives components in your application a way to share data. Use two-way binding to listen for events and update values simultaneously between parent and child components.</h4>'), 
  new AngularContent(12,'Directives', '', '<br><h4>Directives are instructions in the DOM</h4><h4>They are typically added with attributes selector</h4><h4>Types of directives:</h4><ol><h4><li>Attribute directives</li></h4><h4><li>Structural directives</li></h4><h4><li>Components</li></h4></ol>'), 
  new AngularContent(13,'Directives', '', '<h2>Attribute Directives</h2><h4>Change the appearance or behavior of DOM elements and Angular components with attribute directives.</h4><h3>Example</h3><h4>ngclass and ngstyle</h4><h2>Structural directives</h2><h4>Structural directives are responsible for HTML layout. They shape or reshape the DOM\'s structure, typically by adding, removing, and manipulating the host elements to which they are attached.</h4><h4>They have * sign before them.</h4><h3>Example</h3><h4>ngIf, ngFor, ngSwitch</h4><h2>Components</h2><h4>Components are directives that have a template.</h4>'), 
  new AngularContent(14,'ngIf Directive', '', '<br><h4>A structural directive that conditionally includes a template based on the value of an expression coerced to Boolean.</h4><h3>Example</h3><img style="width: 100%;" src="../assets/image/ngif1.PNG"><br><img src="../assets/image/ngif2.PNG"><br><h4><strong>condition</strong> is defined in TypeScript file.</h4>'), 
  new AngularContent(15,'ngStyle Directives', 'blue', '<br><h4>An attribute directive that updates styles for the containing HTML element.</h4><h3>Example</h3><img src="../assets/image/ngstyle1.PNG">'), 
  new AngularContent(16,'ngClass Directives', 'ngClassPresentation', '<br><h4>Adds and removes CSS classes on an HTML element.</h4><h3>Example</h3><img src="../assets/image/ngclass1.PNG">'), 
  new AngularContent(17,'ngFor Directives', '', '<br><h4>A structural directive that renders a template for each item in a collection.</h4><h3>Example</h3><img src="../assets/image/ngfor1.PNG">'), 
  new AngularContent(18,'Binding to Custom properties', '', '<br><h4>The @Input() decorator in a child component or directive signifies that the property can receive its value from its parent component.</h4><img class="center" src="../assets/image/input1.PNG">'), 
  new AngularContent(19,'Binding to Custom properties', '', '<h3>Parent Component</h3><img class="center border" src="../assets/image/input4.PNG"><br><img class="center border" src="../assets/image/input5.PNG"><br><h3>Child Component</h3><img class="center border" src="../assets/image/input2.PNG"><br><img class="center border" src="../assets/image/input3.PNG"><br>'), 
  new AngularContent(20,'Binding to Custom events', '', '<h4>The @Output() decorator in a child component or directive lets data flow from the child to the parent.</h4><img class="center" src="../assets/image/output1.PNG">'),
  new AngularContent(21,'Binding to Custom events', '', '<h3>Child Component</h3><img class="center border" src="../assets/image/output4.PNG"><br><img class="center border" src="../assets/image/output3.PNG"><br><h3>Parent Component</h3><img class="center border" src="../assets/image/output6.PNG"><br><img class="center border" src="../assets/image/output5.PNG"><br>'), 
  new AngularContent(22,'View Encapsulation', '', '<br><h4>In Angular, a component\'s styles can be encapsulated within the component\'s host element so that they don\'t affect the rest of the application.</h4><h3>ViewEncapsulation.ShadowDom</h3><h4>Angular uses the browser\'s built-in Shadow DOM API to enclose the component\'s view inside a ShadowRoot (used as the component\'s host element) and apply the provided styles in an isolated manner.</h4><h3>ViewEncapsulation.Emulated</h3><h4>Angular modifies the component\'s CSS selectors so that they are only applied to the component\'s view and do not affect other elements in the application (emulating Shadow DOM behavior). For more details, see Inspecting generated CSS.</h4><h3>ViewEncapsulation.None</h3><h4>Angular does not apply any sort of view encapsulation meaning that any styles specified for the component are actually globally applied.</h4>'), 
  new AngularContent(23,'@viewChild', '', '<br><h4>Property decorator that configures a view query.</h4><h4>The change detector looks for the first element or the directive matching the selector in the view DOM.</h4><h4>If the view DOM changes, and a new child matches the selector, the property is updated.</h4>')
  ]; 
  counter=0; 
  maxNumber=this.Angularcontent.length; 
  content=this.Angularcontent[this.counter]; 
  disableNextButton=false; 
  disablePreviousButton=true; 
  style=false; 
  class=false; 
  for=false; 
  onPreviousButtonPress(){
    this.counter--;
    this.content=this.Angularcontent[this.counter];
    this.disableNextButton=false; if(this.counter==0){
        this.disablePreviousButton=true; 
    } 
    this.ngIfCheck(); 
  }
  onNextButtonPress(){
      this.counter++;
      this.content=this.Angularcontent[this.counter]; 
      this.disablePreviousButton=false; 
      if(this.maxNumber==this.counter+1){
        this.disableNextButton=true; 
      } 
      this.ngIfCheck(); 
  }
  ngIfCheck(){
   if(this.content.heading=="ngStyle"){
      this.style=true; this.class=false; this.for=false; 
    } 
    else if(this.content.heading=="ngClass"){
       this.class=true; this.for=false; this.style=false; 
    } 
    else if(this.content.heading=="ngFor"){
      this.class=false; this.for=true; this.style=false; 
    } 
    else{
       this.class=false; this.for=false; this.style=false; 
    } 
  } 
} 
export enum KEY_CODE {
    RIGHT_ARROW = 39,
    LEFT_ARROW = 37 
}