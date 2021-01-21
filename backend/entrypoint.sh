#!/bin/sh

cd $APP_PATH

# Se nao tiver o manage.py e a primeira vez que o container e executado, apenas abre o terminal.
ls
if [ -e manage.py ]
then
    echo "Running Migrate to apply changes in database"
    python manage.py migrate

    echo "Running Collect Statics"
    python manage.py collectstatic --clear --noinput --verbosity 0

    # Para producao usar Gunicorn
    # Exemplo usando Gunicorn mais faltou o log no output do container.
    echo "Starting Gunicorn"
    gunicorn --bind 0.0.0.0:8001 \
        monocerotis.wsgi:application \
        --reload --workers=3 --threads=3
else
    /bin/bash
fi

