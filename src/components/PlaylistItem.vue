<template>
    <article class="song">
        <slot></slot>
        <div class="song__details">
            <h2>
                <slot name="title"></slot>
            </h2>
            <span>
                <slot name="artist"></slot>
            </span>
        </div>
    </article>
</template>

<style scoped>
.song {
    display: flex;
    gap: .8rem;
    align-items: center;
    /* margin: 2.4rem 0; */
}
.song__details {
    display: flex;
    flex-direction: column;
    gap: .8rem;
}
h2 {
    color: var(--color-heading);
    font-size: 1.4rem;
    font-weight: 500;
}
span {
    color: var(--color-text);
    font-size: 1.2rem;
    font-weight: 400;
}
</style>