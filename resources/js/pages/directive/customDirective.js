export const vShowAndClose = {
    mounted(el, binding) {
        const { inClosure: inC, outClosure: outC } = binding.value;

        el.style[inC.property] = binding.value.inClosure[inC.property]
        el.style[outC.property] = binding.value.outClosure[outC.property]
    },
    updated(el, binding) {
        const { inClosure: inC, outClosure: outC } = binding.value;
        setTimeout(
            () =>
                (el.style[inC.property] =
                    binding.value.inClosure[inC.property]),
            inC.timeout
        );
        el.style[outC.property] = binding.value.outClosure[outC.property];
    },
};


