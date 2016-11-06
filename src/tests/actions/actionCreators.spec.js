import * as actionCreators from '../../actions/actionCreators';

describe('getRemoteMovies', function() {
	it('returns an object with the type of GET_REMOTE_MOVIES', function() {
		expect(actionCreators.getRemoteMovies()).toEqual({
			type: 'GET_REMOTE_MOVIES'
		});
	});
});
