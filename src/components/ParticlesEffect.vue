<template>
    <vue-particles id="tsparticles" :particlesLoaded="particlesLoaded" :options="particlesOptions" />
</template>

<script lang="ts">
export default {
    data() {
        return {
            particlesOptions: {
                particles: {
                    number: {
                        value: 200,
                        density: {
                            enable: true,
                            area: 800
                        }
                    },
                    color: {
                        value: "#ffffff"
                    },
                    shape: {
                        type: "circle"
                    },
                    opacity: {
                        value: 0.8,
                        random: true
                    },
                    size: {
                        value: 4,
                        random: true
                    },
                    move: {
                        direction: "bottom",
                        enable: true,
                        outModes: {
                            default: "out"
                        },
                        speed: 2
                    }
                },
                interactivity: {
                    events: {
                        onHover: {
                            enable: false
                        },
                        onClick: {
                            enable: false
                        },
                        resize: true
                    }
                },
                background: {
                    color: "#333333"
                }
            }
        };
    }
};
</script>


<style scoped>
/* Ensures the canvas covers the screen */
#tsparticles {
    position: fixed;
    inset: 0;
    z-index: -1;
}
</style>
