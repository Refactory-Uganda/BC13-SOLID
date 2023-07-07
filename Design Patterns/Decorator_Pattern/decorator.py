"""class UndecoratedObject:

    @staticmethod
    def get():
        return "Undecorated Object"
    

class DecoratedObject:
    def __init__(self, undecorated):
        self.undecorated = undecorated

    def get(self):
        return self.undecorated.get().split()


undecorated = UndecoratedObject()
print(undecorated.get())

decorated = DecoratedObject(undecorated)
print(decorated.get())

"""
class SimpleGreeting:
    def greet(self):
        return "welcome!"
    
class HelloDecorator:
    def __init__(self, greeting):
        self.greeting = greeting

    def greet(self):
        return "Hello, " + self.greeting.greet()
        

simple_greeting = SimpleGreeting()
decorated_greeting = HelloDecorator(simple_greeting)

print(decorated_greeting.greet())