<script lang="ts">
    export let texto: string
    export let triplo: boolean = false
    export let duplo: boolean = false
    export let operacao: boolean = false
    export let destaque: boolean = false
    export let onClick: (valor: string) => void = () => {}
</script>

<button class="botao"
    on:click={() => onClick(texto)}
    class:triplo class:duplo class:operacao class:destaque>
    {texto}
</button>

<style>
    .botao {
        margin: 0;
        border: 1px solid var(--cor-fundo);
        flex-basis: 25%;
    }
    
    .triplo {
        flex-basis: 75%;
    }

    .duplo {
        flex-basis: 50%;
    }

    .operacao {
        background-color: orange;
        color: white;
    }

    .destaque {
        background-color: red;
        color: white;
    }
</style>