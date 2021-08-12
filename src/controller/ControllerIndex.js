import axios from "axios"

let bearer = `Bearer ${localStorage.isToken}`
// const baseurl = 'https://cyberapi.witek.id/'
// const remember = localStorage.remember

// const getRefresh = () => {
//     return axios.get('api/refresh', {
//         headers: {
//             Authorization: bearer,
//         }
//     }).then(res => {
//         localStorage.setItem('isToken', res.data.access_token)
//         console.log('Refresh ' + localStorage.isToken)
//     })
// }

// export const getUsers = () => {
//     return axios.get('api/users_view', {
//         headers: {
//             Authorization: bearer,
//         }
//     }).then(res => {
//         return res.data.data
//     })
// }
// users
export const getUsers_view = () => {
    return axios.get('api/users_view', {
        headers: {
            Authorization: bearer,
        }
    }).then(res => {
        return res.data.data
    })
}

export const user_register = input => {
    return axios.post('api/register',{
        username: input.username,
        password: input.password,
        status: input.status
    }, {
        headers: {
            Authorization: bearer,
        }
    }).then(res => {
        return res.data.data
    })
}

export const user_select = input => {
    return axios.post('api/users_select',{
        id: input
    }, {
        headers: {
            Authorization: bearer,
        }
    }).then(res => {
        return res.data.data
    })
}

export const user_edit = input => {
    return axios.post('api/users_edit',{
        id: input.id,
        password: input.password,
        status: input.status
    }, {
        headers: {
            Authorization: bearer,
        }
    }).then(res => {
        return res.data.data
    })
}

// end users
//* Organizations 
export const getOrganizations = () => {
    
    return axios.get('api/organization', {
        headers: {
            Authorization: bearer,
        }
    }).then(res => {
        return res.data.data
    })
}

export const getOrganizations_view = () => {
    
    return axios.get('api/organization_view', {
        headers: {
            Authorization: bearer,
        }
    }).then(res => {
        return res.data.data
    })
}

export const getStatus = input => {
    return axios.post('api/get_status',{
        category: input
    }, {
        headers: {
            Authorization: bearer
        }
    }).then(res => {
        return res.data.data
    })
}

export const add_organization = input => {
    return axios.post('api/organization_create',{
        organizationName: input.organizationName,
        status: input.status
    }, {
        headers: {
            Authorization: bearer,
            'Content-type': 'application/json'
        }
    }).then(res => {
        return res.data.data
    })
}

export const edit_organization = input => {
    return axios.post('api/organization_edit',{
        id: input.id,
        organizationName: input.organizationName,
        status: input.status
    }, {
        headers: {
            Authorization: bearer,
            'Content-type': 'application/json'
        }
    }).then(res => {
        return res.data.data
    })
}

export const select_organization = inputid => {
    return axios.post('api/organization_select',{
        id: inputid
    }, {
        headers: {
            Authorization: bearer,
            'Content-type': 'application/json'
        }
    }).then(res => {
        return res.data.data
    })
}
// End Organizations

// Teams
export const getTeams_view = () => {
    return axios.get('api/teams_view', {
        headers: {
            Authorization: bearer,
        }
    }).then(res => {
        return res.data.data
    })
}

export const getMembers_view = leader_id => {
    return axios.post('api/teams_members_view', {
        leader_id: leader_id
    }, {
        headers: {
            Authorization: bearer,
        }
    }).then(res => {
        return res.data.data
    })
}

export const add_team_lead = input => {
    return axios.post('api/teams_lead_create', {
        organization_id: input.organization_id,
        users_leader: input.users_leader,
        status: input.status
    }, {
        headers: {
            Authorization: bearer,
        }
    }).then(res => {
        return res.data.data
    })
}

export const add_team_member = input => {
    return axios.post('api/teams_member_create', {
        leader_id: input.leader_id,
        member_id: input.member_id,
    }, {
        headers: {
            Authorization: bearer,
        }
    }).then(res => {
        return res.data.data
    })
}

export const select_team = inputid => {
    return axios.post('api/teams_members_select',{
        id: inputid
    }, {
        headers: {
            Authorization: bearer,
            'Content-type': 'application/json'
        }
    }).then(res => {
        return res.data.data
    })
}
// End Teams 
export const ifUnauthorized = () => {
    localStorage.removeItem('isToken')
    window.location.reload()
}