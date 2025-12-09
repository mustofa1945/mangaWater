export const vShowAndClose = {
    mounted(el, binding) {
        const { inClosure: inC, outClosure: outC } = binding.value;

        el.style[inC.property] = binding.value.inClosure[inC.property];
        el.style[outC.property] = binding.value.outClosure[outC.property];
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

//Tunggu transition selesai berdasarkan status. alternatif event transitionEnd jika tidak menghandle case tersebut
export const vWaitTransition = {
    mounted(el, binding) {
        el.style.display = binding.value ? "block" : "none";
    },
    updated(el, binding) {
        if (!binding.value) setTimeout(() => (el.style.display = "none"), 250);
        else el.style.display = "block";
    },
};


