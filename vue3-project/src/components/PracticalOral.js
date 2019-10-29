import BaseOral from "@/components/BaseOral";
import grade from '@/assets/js/data';

export default {
  name: "PracticalOral",
  mixins: [BaseOral],
  created() {
    this.setData();
  },
  methods: {
    setData() {
     this.initData = grade['grade' + JSON.parse(localStorage.getItem('gradeInfo')).id]['2']
    }
  }
};


