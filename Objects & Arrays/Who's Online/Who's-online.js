const whosOnline = (friends) => {
    let newObj = {}

    for (let i = 0; i < friends.length; i++) {
        if (friends[i].status === 'online' && friends[i].lastActivity <= 10) {
            newObj.online = []
        }
        if (friends[i].status === 'online' && friends[i].lastActivity > 10) {
            newObj.away = []
        }
        if (friends[i].status === 'offline') {
            newObj.offline = []
        }
    }
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].status === 'online' && friends[i].lastActivity <= 10) {
            newObj.online.push(friends[i].username)
        }
        if (friends[i].status === 'online' && friends[i].lastActivity > 10) {
            newObj.away.push(friends[i].username)
        }
        if (friends[i].status === 'offline') {
            newObj.offline.push(friends[i].username)
        }
    }
    return newObj
}



console.log(whosOnline([{
            username: 'David',
            status: 'online',
            lastActivity: 10
        }, {
            username: 'Lucy',
            status: 'online',
            lastActivity: 78
        }, {
            username: 'tad',
            status: 'offline',
            lastActivity: 22
        }, {
            username: 'ad',
            status: 'offline',
            lastActivity: 22
        }, {
            username: 'locky',
            status: 'online',
            lastActivity: 2
        }, {
            username: 'fack',
            status: 'offline',
            lastActivity: 22
        }, {
            username: 'Bob',
            status: 'online',
            lastActivity: 4
        }
        ]
    )
)