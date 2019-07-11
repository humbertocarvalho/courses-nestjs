import { timingSafeEqual } from 'crypto';

// feature
class FriendsList {
  friends = [];
  addFriend(name) {
    this.friends.push(name);
    this.announceFriendship(name);
  }

  announceFriendship(name) {
    console.log(`${name} is now a friend`);
  }

  removeFriend(name) {
    const idx = this.friends.indexOf(name);

    if (idx === -1) {
      throw new Error('Friend not found');
    }

    this.friends.splice(idx, 1);
  }
}

// tests
describe('FriendsLists', () => {
  let friendsList;

  beforeEach(() => {
    friendsList = new FriendsList();
  });
  it('initializes friends lists', () => {
    expect(friendsList.friends.length).toEqual(0);
  });

  it('adds a friend to the list', () => {
    friendsList.addFriend('HUmberto');

    expect(friendsList.friends.length).toEqual(1);
  });

  it('announces friendship', () => {
    friendsList.announceFriendship = jest.fn();

    expect(friendsList.announceFriendship).not.toHaveBeenCalled();
    friendsList.addFriend('HUmberto');
    expect(friendsList.announceFriendship).toHaveBeenCalled();
  });

  describe('removeFriend', () => {
    it('remove a friend from the list', () => {
      friendsList.addFriend('Humberto');
      expect(friendsList.friends[0]).toEqual('Humberto');
      friendsList.removeFriend('Humberto');
      expect(friendsList.friends[0]).toBeUndefined();
    });

    it('throws an error as friend does not exis', () => {
      expect(() => friendsList.removeFriend('Humberto')).toThrow(Error);
    });
  });
});
