<script>
    import { useRegisterSW } from 'virtual:pwa-register/svelte';

    useRegisterSW({
        onRegistered(swr) {
            console.log(`SW registered: ${swr}`);
        },
        onRegisterError(error) {
            console.log('SW registration error', error);
        },
    });
</script>