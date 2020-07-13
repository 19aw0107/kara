<template>
<div class="hello">
    <h1>成績</h1>
    <div id="seiseki">
        <button v-on:click="gameReset" type="button" id="gameStart">リセット</button>
    <!--<p>{{ $store.state.score}}</p>ここに結果を表示$store.state.score-->
    <!--<p>{{$store.state}}</p>-->
        <!--<p>{{ $store.state.score[1] }}</p>-->
        <ul>
            <li v-for="(scores, i) of $store.state.scores" :key='scores'>
                {{ (i + 1) }}回目は{{ $store.state.scores[i] }}
            </li><br>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    name: 'scores',
    props: ['score'],
    data() {
        return {}
    },
    methods:{
        gameReset() { //リセットボタンが押されたときの処理
            this.$store.state.score = [];//空にします。
            this.$store.state.scores = [];//空にします。
        }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.imgArea{
    height: 300px;
}
</style>
