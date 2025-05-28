import { useUtils } from "../utilsFunctionStore";

export const useProvideOneUtilsNav = () => {

    const { wait } = useUtils();

    const runMenu = (proxy) => {
        if (proxy.status) {
            wait(() => (proxy.display = "hidden"), 250);
            proxy.width = "0";
            proxy.status = false;
        } else {
            wait(() => (proxy.width = "[25%]"), 10);
            proxy.display = "flex";
            proxy.status = true;
        }
    };

    const runHeaderUp = (proxy) => {
        if (proxy.status) {
            wait(() => (proxy.display = "hidden"), 250);
            proxy.translateY = "[-100%]";
            proxy.status = false;
        } else {
            wait(() => (proxy.translateY = "0"), 10);
            proxy.status = true;
            proxy.display = "unmounted";
        }
    };

    const runComment = (proxy) => {
        if (proxy.status) {
            wait(() => (proxy.width = "[150vh] "), 10);
            proxy.status = false;
            proxy.display = "unmounted";
        } else {
            wait(() => (proxy.display = "hidden"), 500);
            proxy.width = "0";
            proxy.status = true;
        }
    };

    return { runMenu, runComment, runHeaderUp };
};
