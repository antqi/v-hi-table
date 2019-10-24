<template>
  <div class="content">
    <hi-table :list="list" :height="500">
      <hi-table-td label="课次" prop="seq">
        <template>
          <pre>wwww</pre>
        </template>
      </hi-table-td>
      <hi-table-td label="课程标题" prop="courseTitle">
        <template>
          <pre>wwwwww</pre>
        </template>
      </hi-table-td>
      <hi-table-td label="时间" prop="courseTime"></hi-table-td>
      <hi-table-td label="操作" prop="seq"></hi-table-td>
    </hi-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      visible2: false,
      list: []
    }
  },
  created () {
    this.list = [
      {
        "seq": 1,
        "courseTitle": "第1讲",
        "courseTime": "2019-09-28 19:55~19:57",
        "status": 3
      },
      {
        "seq": 2,
        "courseTitle": "第2讲",
        "courseTime": "2019-09-28 20:14~21:00",
        "status": 3
      },
      {
        "seq": 3,
        "courseTitle": "第3讲",
        "courseTime": "2019-09-29 10:50~18:35",
        "status": 3
      },
      {
        "seq": 4,
        "courseTitle": "第4讲",
        "courseTime": "2019-09-29 18:45~19:00",
        "status": 3
      },
      {
        "seq": 5,
        "courseTitle": "第5讲",
        "courseTime": "2019-09-29 19:50~20:00",
        "status": 3
      },
      {
        "seq": 6,
        "courseTitle": "第6讲",
        "courseTime": "2019-09-29 20:11~21:00",
        "status": 3
      },
      {
        "seq": 7,
        "courseTitle": "第7讲",
        "courseTime": "2019-09-30 10:21~21:00",
        "status": 3
      },
      {
        "seq": 8,
        "courseTitle": "第8讲",
        "courseTime": "2019-10-05 10:00~21:00",
        "status": 3
      },
      {
        "seq": 9,
        "courseTitle": "第9讲",
        "courseTime": "2019-10-06 10:00~21:00",
        "status": 3
      },
      {
        "seq": 10,
        "courseTitle": "第10讲",
        "courseTime": "2019-10-07 10:00~21:00",
        "status": 3
      },
      {
        "seq": 11,
        "courseTitle": "第11讲",
        "courseTime": "2019-10-08 10:00~21:00",
        "status": 3
      },
      {
        "seq": 12,
        "courseTitle": "第12讲",
        "courseTime": "2019-10-09 10:00~21:00",
        "status": 3
      },
      {
        "seq": 13,
        "courseTitle": "第13讲",
        "courseTime": "2019-10-10 10:00~21:00",
        "status": 3
      },
      {
        "seq": 14,
        "courseTitle": "第14讲",
        "courseTime": "2019-10-11 10:00~19:30",
        "status": 3
      },
      {
        "seq": 15,
        "courseTitle": "第15讲",
        "courseTime": "2019-10-11 19:33~21:00",
        "status": 3
      },
      {
        "seq": 16,
        "courseTitle": "第16讲",
        "courseTime": "2019-10-13 10:00~21:00",
        "status": 3
      },
      {
        "seq": 17,
        "courseTitle": "第17讲",
        "courseTime": "2019-10-14 10:00~21:00",
        "status": 3
      },
      {
        "seq": 18,
        "courseTitle": "第18讲",
        "courseTime": "2019-10-15 10:00~21:00",
        "status": 3
      },
      {
        "seq": 19,
        "courseTitle": "第19讲",
        "courseTime": "2019-10-16 10:00~21:00",
        "status": 3
      },
      {
        "seq": 20,
        "courseTitle": "第20讲",
        "courseTime": "2019-10-17 10:00~21:00",
        "status": 3
      },
      {
        "seq": 21,
        "courseTitle": "第21讲",
        "courseTime": "2019-10-18 10:00~21:00",
        "status": 3
      },
      {
        "seq": 22,
        "courseTitle": "第22讲",
        "courseTime": "2019-10-19 10:00~21:00",
        "status": 3
      },
      {
        "seq": 23,
        "courseTitle": "第23讲",
        "courseTime": "2019-10-20 10:00~21:00",
        "status": 3
      },
      {
        "seq": 24,
        "courseTitle": "第24讲",
        "courseTime": "2019-10-21 10:00~17:00",
        "status": 3
      },
      {
        "seq": 25,
        "courseTitle": "第25讲",
        "courseTime": "2019-10-21 17:50~21:00",
        "status": 2
      },
      {
        "seq": 26,
        "courseTitle": "第26讲",
        "courseTime": "2019-10-23 10:00~21:00",
        "status": 1
      },
      {
        "seq": 27,
        "courseTitle": "第27讲",
        "courseTime": "2019-10-24 10:00~21:00",
        "status": 1
      },
      {
        "seq": 28,
        "courseTitle": "第28讲",
        "courseTime": "2019-10-25 10:00~21:00",
        "status": 1
      },
      {
        "seq": 29,
        "courseTitle": "第29讲",
        "courseTime": "2019-10-26 10:00~21:00",
        "status": 1
      },
      {
        "seq": 30,
        "courseTitle": "第30讲",
        "courseTime": "2019-10-27 10:00~21:00",
        "status": 1
      },
      {
        "seq": 31,
        "courseTitle": "第31讲",
        "courseTime": "2019-10-28 10:00~21:00",
        "status": 1
      },
      {
        "seq": 32,
        "courseTitle": "第32讲",
        "courseTime": "2019-10-29 10:00~21:00",
        "status": 1
      },
      {
        "seq": 33,
        "courseTitle": "第33讲",
        "courseTime": "2019-10-30 10:00~21:00",
        "status": 1
      },
      {
        "seq": 34,
        "courseTitle": "第34讲",
        "courseTime": "2019-10-31 10:00~21:00",
        "status": 1
      },
      {
        "seq": 35,
        "courseTitle": "第35讲",
        "courseTime": "2019-11-01 10:00~21:00",
        "status": 1
      },
      {
        "seq": 36,
        "courseTitle": "第36讲",
        "courseTime": "2019-11-02 10:00~21:00",
        "status": 1
      },
      {
        "seq": 37,
        "courseTitle": "第37讲",
        "courseTime": "2019-11-03 10:00~21:00",
        "status": 1
      },
      {
        "seq": 38,
        "courseTitle": "第38讲",
        "courseTime": "2019-11-04 10:00~21:00",
        "status": 1
      },
      {
        "seq": 39,
        "courseTitle": "第39讲",
        "courseTime": "2019-11-05 10:00~21:00",
        "status": 1
      },
      {
        "seq": 40,
        "courseTitle": "第40讲",
        "courseTime": "2019-11-06 10:00~21:00",
        "status": 1
      },
      {
        "seq": 41,
        "courseTitle": "第41讲",
        "courseTime": "2019-11-07 10:00~21:00",
        "status": 1
      },
      {
        "seq": 42,
        "courseTitle": "第42讲",
        "courseTime": "2019-11-08 10:00~21:00",
        "status": 1
      },
      {
        "seq": 43,
        "courseTitle": "第43讲",
        "courseTime": "2019-11-09 10:00~21:00",
        "status": 1
      },
      {
        "seq": 44,
        "courseTitle": "第44讲",
        "courseTime": "2019-11-10 10:00~21:00",
        "status": 1
      },
      {
        "seq": 45,
        "courseTitle": "第45讲",
        "courseTime": "2019-11-11 10:00~21:00",
        "status": 1
      },
      {
        "seq": 46,
        "courseTitle": "第46讲",
        "courseTime": "2019-11-12 10:00~21:00",
        "status": 1
      },
      {
        "seq": 47,
        "courseTitle": "第47讲",
        "courseTime": "2019-11-13 10:00~21:00",
        "status": 1
      },
      {
        "seq": 48,
        "courseTitle": "第48讲",
        "courseTime": "2019-11-14 10:00~21:00",
        "status": 1
      },
      {
        "seq": 49,
        "courseTitle": "第49讲",
        "courseTime": "2019-11-15 10:00~21:00",
        "status": 1
      },
      {
        "seq": 50,
        "courseTitle": "第50讲",
        "courseTime": "2019-11-16 10:00~21:00",
        "status": 1
      }
    ]
  },
  methods: {
  }
}
</script>

<style lang='stylus'>
.content {
  // width 30vw
  display flex
  flex-direction column
  align-items center
}
</style>