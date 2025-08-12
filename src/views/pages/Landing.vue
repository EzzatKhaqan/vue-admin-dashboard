<script setup>
import AppButton from '@/components/button/AppButton.vue';
</script>
<template>
    <div class="landing-page">

        <header class="navbar">
            <div class="container">
                <h1 class="brand">Ezzat Vue Admin Dashboard</h1>
                <nav>
                    <a href="#features">Features</a>
                    <a href="#about">About</a>
                </nav>
            </div>
        </header>

        <section class="hero">
            <h2>Manage Everything with Ease</h2>
            <p>
                A robust <span class="gradient-text">Vue.js</span> admin dashboard that consolidates all administrative
                components into a single,
                manageable interface.
            </p>
            <div class="hero-buttons">
                <AppButton label="Get Started" type="info" outlined role="link" to="admin" icon="pi pi-caret-right">
                </AppButton>
            </div>
        </section>

        <section id="features" class="features">
            <h3>Features</h3>
            <div class="features-grid">
                <div class="feature-card">
                    <h4>Advanced Data Tables</h4>
                    <p>
                        Create, filter, sort, and paginate data effortlessly with fully customizable, high-performance
                        tables.
                    </p>
                </div>

                <div class="feature-card">
                    <h4>Interactive UI Components</h4>
                    <p>
                        From buttons to dropdowns and modals, every component is designed for speed, accessibility, and
                        style.
                    </p>
                </div>

                <div class="feature-card">
                    <h4>Seamless Integration</h4>
                    <p>
                        Built with <span class="gradient-text">Vue.js</span> for easy integration into any admin panel,
                        with consistent design and
                        responsive layouts.
                    </p>
                </div>
            </div>
        </section>

        <footer class="_footer">
            © {{ new Date().getFullYear() }} My Admin Dashboard. Some code, some magic ✨.
        </footer>
    </div>
</template>

<style scoped lang="scss">
.container {
    max-width: 1200px;
    margin: auto;
    padding: 1rem;
}

.navbar {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: var(--e-white);
    border-bottom: 1px solid var(--e-border-color);
    padding: 1rem 0;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1200px;
        margin: auto;
        padding: 0 1.5rem;
    }

    .brand {
        font-size: 1.6rem;
        font-weight: bold;
        color: var(--e-primary-green);
        letter-spacing: 0.5px;
        cursor: pointer;
        transition: transform 0.3s ease;

        &:hover {
            transform: scale(1.05);
        }
    }

    nav {
        display: flex;
        align-items: center;
        gap: 2rem;

        a {
            position: relative;
            text-decoration: none;
            font-weight: 500;
            font-size: 1rem;
            color: var(--e-dark-navy);
            transition: color 0.3s ease;

            &::after {
                content: "";
                position: absolute;
                left: 0;
                bottom: -4px;
                width: 0%;
                height: 2px;
                background: var(--e-primary-green);
                transition: width 0.3s ease;
            }

            &:hover {
                color: var(--e-primary-green);

                &::after {
                    width: 100%;
                }
            }
        }
    }
}

.hero {
    background: linear-gradient(90deg, var(--e-dark-navy), var(--e-light-green));
    color: var(--e-white);
    text-align: center;
    padding: 5rem 2rem;

    h2 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }

    p {
        max-width: 600px;
        margin: 0 auto 2rem;
    }

    .hero-buttons {
        display: flex;
        justify-content: center;
        gap: 1rem;
    }
}

.features {
    background: var(--e-surface-ground);
    padding: 4rem 2rem;
    text-align: center;

    h3 {
        font-size: 2rem;
        margin-bottom: 2rem;
        color: var(--e-dark-navy);
    }

    .features-grid {
        display: grid;
        gap: 1.5rem;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    }

    .feature-card {
        background: var(--e-white);
        padding: 1.5rem;
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
        transition: transform 0.3s, box-shadow 0.3s;
    }

    .feature-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
    }

    .feature-card h4 {
        color: var(--e-primary-orange);
        margin-bottom: 0.5rem;
    }
}

._footer {
    width: 100%;
    background: var(--e-dark-navy);
    color: var(--e-gray);
    text-align: center;
    padding: 1rem;
}
</style>
