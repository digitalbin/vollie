<script>
    import SvelteSeo from 'svelte-seo';
    export let data;
    const { title, thumbnail, thumbnail_height, thumbnail_width } = data;
</script>

<SvelteSeo
    openGraph={{
        title,
        description: title,
        url: window.location.href,
        type: 'website',
        images: [
            {
                url: thumbnail,
                width: thumbnail_width,
                height: thumbnail_height,
                alt: title,
            },
        ],
    }}
    twitter={{
        site: "@vollie",
        title,
        description: title,
        image: thumbnail,
        imageAlt: title,
      }}
/>
