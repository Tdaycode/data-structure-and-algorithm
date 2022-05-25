class Student:
    # [assignment] Skeleton class. Add your code here
    def __init__(self, name, age, tracks, score):
        self.name = name
        self.age = age
        self.tracks = tracks
        self.score = score

    def change_name(self, name):
        self.name = name
        if not isinstance(name, str):
            print('Name must be string')
        return name

    def change_age(self, age):
        if not isinstance(age, int):
            print('Age must be an integer')
        self.age = age
        return int(age)

    def add_track(self, track):
        self.tracks.append(track)
        return self.tracks

    def get_score(self):
        return self.score


Bob = Student("Bob", 26, ["FE", "BE"], 20.90)

# Expected methods
Bob.change_name("Peter")
Bob.change_age(34)
Bob.add_track("UI/UX")
Bob.get_score()
print(Bob.change_age(32.5))
