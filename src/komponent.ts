declare const ko;

const register = (name: string, template: string, ViewModel?: typeof Function, async = true) => {
    const registration = <any>{};

    registration.template = template || " ";
    registration.synchronous = !async;
    if (ViewModel) {
        registration.viewModel = {
            createViewModel: (params, componentInfo) =>  new ViewModel(params, componentInfo)
        };
    }

    ko.components.register(name, registration);
}

const komponent = (options: {
    name: string;
    template?: string;
    async?: boolean;
}) => (Ctor: typeof Function) => register(options.name, options.template, Ctor, options.async);

export default komponent;