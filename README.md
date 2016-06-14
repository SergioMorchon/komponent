# Komponent

It is a declaration way of using Knockout components http://knockoutjs.com/documentation/component-overview.html.

With this extra you will be able to write in TypeScript things like:

``` typescript
import komponent from 'komponent';

const name = 'hello';
const template = 'Hello, <span data-bind="text: name" />!';

@komponent({name, template})
class MyWebComponent {

    name: string;

    constructor(params, componentInfo) {
        this.name = params.name;
    }
}
```

``` html
<hello params="name: 'world!'" />
```