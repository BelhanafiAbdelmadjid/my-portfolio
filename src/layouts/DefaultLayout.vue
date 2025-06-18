<template>
    <div class="w-screen h-screen min-h-[600px] min-w-[600px] box-border">
        <nav class="bg-gray-800 text-white p-4">
            <span class="font-bold">My Portfolio</span>
        </nav>
        <main>
            <slot />
        </main>
        <footer class="bg-gray-900 text-white p-4 text-center">
            &copy; 2025 My Portfolio
        </footer>
    </div>
</template>