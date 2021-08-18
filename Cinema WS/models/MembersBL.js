const utils=require('../Utils/utils')

            const getAllMembers = ()=> {
                return utils.getAll('http://localhost:8000/members')
            }

            const getMemberById = (memberId)=> {
                return utils.getById("http://localhost:8000/members",memberId)     
            }

            const addMember = (member)=> {
                return utils.addItem('http://localhost:8000/members', member)
            }


            const updateMember = (memberId, member)=> {
                return utils.updateItem(`http://localhost:8000/members`,memberId, member)
            }

            const deleteMember = (memberId)=> {
                    return utils.removeItem(`http://localhost:8000/members`,memberId)
            }

module.exports = {getAllMembers,getMemberById,addMember,updateMember,deleteMember}