from django.shortcuts import render

def index(request):
    display = ''
    result = ''
    if request.method == 'POST':
        button = request.POST.get('button')
        display = request.POST.get('display', '')

        if button == 'C':
            display = ''
        elif button == '=':
            try:
                result = eval(display)
                display = str(result)
            except:
                display = 'Error'
        else:
            display += button

    return render(request, 'calculator/index.html', {'display': display})
