declare const komponent: (options: {
    name: string;
    template?: string;
    async?: boolean;
}) => (Ctor: FunctionConstructor) => void;
export default komponent;
