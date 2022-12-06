export default {
    coaches(state) {
        return state.coaches;
    },
    hasCoaches(state) {
       return state.coaches && state.coaches.length > 0; 
    },
    isCoach(_,getter, _2,rootGetters) {
        const coaches = getter.coaches;
        const userId = rootGetters.userId;
        return coaches.some((coach) => {
            return coach.id === userId
        })
    }
}