# #!/bin/sh

# cd $APP_PATH

# # Se nao tiver o manage.py e a primeira vez que o container e executado, apenas abre o terminal.
# ls
# if [ -e manage.py ]
# then
#     echo "Running Migrate to apply changes in database"
#     python manage.py migrate

#     echo "Running Collect Statics"
#     python manage.py collectstatic --clear --noinput --verbosity 0

#     # Para producao usar Gunicorn
#     # Exemplo usando Gunicorn mais faltou o log no output do container.
#     echo "Starting Gunicorn"
#     gunicorn --bind 0.0.0.0:8001 \
#         monocerotis.wsgi:application \
#         --reload --workers=3 --threads=3
# else
#     /bin/bash
# fi



#!/bin/sh

cd $APP_PATH

YELLOW='\033[00;33m'
NO_COLOR='\033[0m'

# Se nao tiver o manage.py e a primeira vez que o container e executado, apenas abre o terminal.
ls
if [ -e manage.py ]
then
    # Usar o server do django so para desenvolvimento
    echo "Running Django with ${YELLOW} DEVELOPMENT SERVER ${NO_COLOR}, for production use Gunicorn."

    echo "Running Migrate to apply changes in database"
    python manage.py migrate

    echo "Running Collect Statics"
    python manage.py collectstatic --clear --noinput --verbosity 0

    python manage.py runserver 0.0.0.0:8001

    # Para producao usar Gunicorn
    # Exemplo usando Gunicorn mais faltou o log no output do container.
    # echo "Starting Gunicorn"
    # gunicorn --bind 0.0.0.0:$GUNICORN_PORT \
    #     $GUNICORN_MODULE:$GUNICORN_CALLABLE \
    #     --reload
else
    /bin/bash
fi



