<template>
  <div class="loading" v-show="loading">
    <div class="show-loading">
      <span class="row1"></span>
      <span class="row2"></span>
      <span class="row3"></span>
      <span class="row4"></span>
      <span class="row5"></span>
      <p>加载中...</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['loading']
}
</script>

<style lang="scss">
  .loading {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 999;

    .show-loading {
      position: absolute;
      left: 50%;
      top: 30%;
      width: 200px;
      height: 100px;

      span {
        position: absolute;
        display: inline-block;
        width: 15px;
        height: 15px;
        border-radius: 15px;
        background-color: white;
      }

      p {
        color: white;
        margin-top: 30px;
        margin-left: 25px;
      }

      span.row1 {
        left: 0px;
        background-color: #e14545;
        animation: row1 1s ease-out infinite;
      }

      span.row2 {
        left: 25px;
        background-color: #fcb421;
      }

      span.row3 {
        left: 50px;
        background-color: #1aadc0;
      }

      span.row4 {
        left: 75px;
        background-color: #aade26;
      }

      span.row5 {
        left: 100px;
        background-color: #5e5b9b;
        animation: row5 1s ease-out infinite;
      }

      @-webkit-keyframes row1 {
        0% {
          -webkit-transform: translate3d(0, 0, 0);
        }

        50% {
          -webkit-transform: translate3d(-10px, -30px, 0);
        }

        100% {
          -webkit-transform: translate3d(0, 0, 0);
        }
      }

      @keyframes row1 {
        0% {
          transform: translate3d(0, 0, 0);
        }

        50% {
          transform: translate3d(-10px, -30px, 0);
        }

        100% {
          transform: translate3d(0, 0, 0);
        }
      }

      @-webkit-keyframes row5 {
        0% {
          -webkit-transform: translate3d(10px, -30px, 0);
        }

        50% {
          -webkit-transform: translate3d(0, 0, 0);
        }

        100% {
          -webkit-transform: translate3d(10px, -30px, 0);
        }
      }

      @keyframes row5 {
        0% {
          transform: translate3d(10px, -30px, 0);
        }

        50% {
          transform: translate3d(0, 0, 0);
        }

        100% {
          transform: translate3d(10px, -30px, 0);
        }
      }
    }
  }

  @media screen and (max-width: 500px) {
    .loading {
      .show-loading {
        position: absolute;
        left: 40%;
        top: 30%;
        width: 200px;
        height: 100px;
      }
    }
  }
</style>
