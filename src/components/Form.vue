<template>
  <div>
    <div style="margin:10px">
      <h3>表单输入</h3>
    </div>
    <Card>
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="名字" prop="name">
          <Input v-model="formValidate.name" placeholder="请输入你的名字"></Input>
        </FormItem>
        <FormItem label="年龄" prop="age">
          <Input v-model="formValidate.age" placeholder="请输入你的年龄" number></Input>
        </FormItem>
        <FormItem label="邮箱" prop="mail">
          <Input v-model="formValidate.mail" placeholder="请输入你的电子邮箱"></Input>
        </FormItem>
        <FormItem label="城市" prop="city">
          <Select v-model="formValidate.city" placeholder="请选择你的城市">
            <Option value="北京">北京</Option>
            <Option value="上海">上海</Option>
            <Option value="深圳">深圳</Option>
          </Select>
        </FormItem>
        <FormItem label="日期">
          <Row>
            <Col span="11">
            <FormItem prop="date">
              <DatePicker type="date" placeholder="请选择日期" v-model="formValidate.date"></DatePicker>
            </FormItem>
            </Col>
            <Col span="2" style="text-align: center">-</Col>
            <Col span="11">
            <FormItem prop="time">
              <TimePicker type="time" placeholder="请选择时间" v-model="formValidate.time"></TimePicker>
            </FormItem>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="性别" prop="gender">
          <RadioGroup v-model="formValidate.gender">
            <Radio label="男">男</Radio>
            <Radio label="女">女</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="爱好" prop="interest">
          <CheckboxGroup v-model="formValidate.interest">
            <Checkbox label="吃"></Checkbox>
            <Checkbox label="睡"></Checkbox>
            <Checkbox label="翻身"></Checkbox>
            <Checkbox label="打代码"></Checkbox>
          </CheckboxGroup>
        </FormItem>
        <FormItem label="简介" prop="desc">
          <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入个人简介"></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
          <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
          <Button type="ghost" @click="handlePush" style="margin-left: 8px">一键填写</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'DForm',
  data() {
    const validateAge = (rule, value, callback) => {
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字'));
        } else {
          if (value < 18) {
            callback(new Error('必须大于18岁'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    return {
      formValidate: this.$store.state.form.formItem,
      ruleValidate: {
        name: [
          { required: true, message: '请输入名字', trigger: 'blur' }
        ],
        age: [
          { required: true, message: '请输入年龄'},
          { validator: validateAge, trigger: 'blur' }
        ],
        mail: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '邮箱类型不正确', trigger: 'blur' }
        ],
        city: [
          { required: true, message: '请选择城市', trigger: 'change' }
        ],
        gender: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        interest: [
          { required: true, type: 'array', min: 1, message: '最少选择一个爱好', trigger: 'change' },
          { type: 'array', max: 2, message: '最多选择两个爱好', trigger: 'change' }
        ],
        date: [
          { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
        ],
        time: [
          { required: true, type: 'string', message: '请选择时间', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请输入个人简介', trigger: 'blur' },
          { type: 'string', min: 20, message: '最少20字哦', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit(name,form) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('成功!');
          this.$store.commit('formSubmit')
        } else {
          this.$Message.error('请完整填写表单!');
        }
      })
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
    handlePush(name) {
      this.$store.commit('formPush');
    }
  }
}

</script>
