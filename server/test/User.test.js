const app = require('../app'),
      chai = require('chai'),
      chaiHttp = require('chai-http'),
      expect = chai.expect,
      hash = require('bycjwt'),
      
      User = require('../models/user')

chai.use(chaiHttp)


describe('User Registration Test', () => {
    describe('Successfully Register Test', () => {

        let dummyUser = {
            first_name: 'Indy',
            last_name: 'Dayo',
            email: 'indidayo@mail.com',
            password: '123456'
        }

        afterEach(() => {
            User
                .deleteMany({})
                .then(() => {})

            let dummyUser = {
                first_name: 'Indy',
                last_name: 'Dayo',
                email: 'indidayo@mail.com',
                password: '123456'
            }   

        })

        it('Should return success message', done => {
            chai
                .request(app)
                .post('/register')
                .send(dummyUser)
                .end((err, res) => {
                    expect(res).to.have.status(201)
                    expect(res.body).to.have.property('message')
                    expect(res.body).to.have.property('data')
                    expect(res.body.message).to.equal('Registered successfully')
                    expect(res.body.data).to.have.property('first_name')
                    expect(res.body.data).to.have.property('last_name')
                    expect(res.body.data).to.have.property('email')
                    expect(res.body.data).to.have.property('password')
                    expect(res.body.data.first_name).to.equal(dummyUser.first_name)
                    expect(res.body.data.last_name).to.equal(dummyUser.last_name)
                    expect(res.body.data.email).to.equal(dummyUser.email)
                    expect(hash.bcdecode(dummyUser.password ,res.body.data.password)).to.equal(true)
                    done()
                })
        })
    })

    describe('Failed to Register Test', done => {

        let dummyUser = {
            first_name: 'Indy',
            last_name: 'Dayo',
            email: 'indidayo@mail.com',
            password: '123456'
        }

        afterEach(() => {
            User
                .deleteMany({})
                .then(() => {})

            dummyUser = {
                first_name: 'Indy',
                last_name: 'Dayo',
                email: 'indidayo@mail.com',
                password: '123456'
            }   

        })

        it(`Should return 'First Name must be filled' if first_name is empty`, done => {
            dummyUser.first_name = ''

            chai
                .request(app)
                .post('/register')
                .send(dummyUser)
                .end((err, res) => {
                    expect(res).to.have.status(500)
                    expect(res.body).to.have.property('error')
                    expect(res.body.error).to.equal('First Name must be filled')
                    done()
                })
        })

        it(`Should return 'Last Name must be filled' if last_name is empty`, done => {
            dummyUser.last_name = ''

            chai
                .request(app)
                .post('/register')
                .send(dummyUser)
                .end((err, res) => {
                    expect(res).to.have.status(500)
                    expect(res.body).to.have.property('error')
                    expect(res.body.error).to.equal('Last Name must be filled')
                    done()
                })
        })

        it(`Should return 'Email must be filled' if email is empty`, done => {
            dummyUser.email = ''

            chai
                .request(app)
                .post('/register')
                .send(dummyUser)
                .end((err, res) => {
                    expect(res).to.have.status(500)
                    expect(res.body).to.have.property('error')
                    expect(res.body.error).to.equal('Email must be filled')
                    done()
                })
        })

        it(`Should return 'Email already exists' if email is not unique`, done => {
            chai
                .request(app)
                .post('/register')
                .send(dummyUser)
                .end((err, res) => {
                    expect(res).to.have.status(201)
                    expect(res.body).to.have.property('message')
                    expect(res.body).to.have.property('data')
                    expect(res.body.message).to.equal('Registered successfully')
                    expect(res.body.data).to.have.property('first_name')
                    expect(res.body.data).to.have.property('last_name')
                    expect(res.body.data).to.have.property('email')
                    expect(res.body.data).to.have.property('password')
                    expect(res.body.data.first_name).to.equal(dummyUser.first_name)
                    expect(res.body.data.last_name).to.equal(dummyUser.last_name)
                    expect(res.body.data.email).to.equal(dummyUser.email)
                    expect(hash.bcdecode(dummyUser.password ,res.body.data.password)).to.equal(true)

                    chai
                        .request(app)
                        .post('/register')
                        .send(dummyUser)
                        .end((err, res) => {
                            expect(res).to.have.status(500)
                            expect(res.body).to.have.property('error')
                            expect(res.body.error).to.equal('Email already exists, please use another email')
                            done()
                        })
                })


           
        })

        it(`Should return 'Email format is incorrect' if email does not have '@' and '.' in order`, done => {
            console.log(dummyUser);
            
            dummyUser.email = 'indidayomail.com'

            chai
                .request(app)
                .post('/register')
                .send(dummyUser)
                .end((err, res) => {
                    expect(res).to.have.status(500)
                    expect(res.body).to.have.property('error')
                    expect(res.body.error).to.equal('Email is not written in email format')
                    done()
                })
        })


        it(`Should return 'Password must be filled' if password is empty`, done => {
            dummyUser.password = ''

            chai
                .request(app)
                .post('/register')
                .send(dummyUser)
                .end((err, res) => {
                    expect(res).to.have.status(500)
                    expect(res.body).to.have.property('error')
                    expect(res.body.error).to.equal('Password must be filled')
                    done()
                })
        })

        it(`Should return 'Password must be at least 6 characters' if password is less than 6 characters`, done => {
            dummyUser.password = '12345'

            chai
                .request(app)
                .post('/register')
                .send(dummyUser)
                .end((err, res) => {
                    expect(res).to.have.status(500)
                    expect(res.body).to.have.property('error')
                    expect(res.body.error).to.equal('Password must be at least 6 characters')
                    done()
                })
        })

    })
})


describe('User Login Test', () => {
    describe('Successfully Login Test', () => {

        let dummyUser = {
            first_name: 'Indy',
            last_name: 'Dayo',
            email: 'indidayo@mail.com',
            password: '123456'
        }

        before(() => {
            let dummyUser = {
                first_name: 'Indy',
                last_name: 'Dayo',
                email: 'indidayo@mail.com',
                password: '123456'
            }

            let user = new User(dummyUser)

            user
                .save()
                .then(() => {})
        })

        after(() => {
            User
                .deleteMany({})
                .then(() => {})
        })


        it('Should return success message and a token', done => {
            chai
                .request(app)
                .post('/login')
                .send(dummyUser)
                .end((err, res) => {
                    expect(res).to.have.status(200)
                    expect(res.body).to.have.property('message')
                    expect(res.body).to.have.property('token')
                    expect(res.body.message).to.equal('Login successfully')
                    done()
                })
        })

    })
})