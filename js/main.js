import Main from './Main.svelte';
import {mount} from "svelte";

document.addEventListener('DOMContentLoaded', () => {
    const target = document.getElementById('svelte-root');

    if (target) {
        let params = {
            target
        };
        const logId = target.dataset.logId ? parseInt(target.dataset.logId || '0', 10) : null;
        if (logId) {
            params.props = {
                id: logId
            };
        }
        mount(Main, params);
    }
});
