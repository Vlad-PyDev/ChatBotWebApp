import eel

eel.init('web')


@eel.expose
def get_response(message):
    return "Бот: " + message


eel.start('initial.html', size=(800,600))