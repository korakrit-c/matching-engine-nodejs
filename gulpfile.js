import gulp from 'gulp'
import sonarqubeScanner from 'sonarqube-scanner'

gulp.task('default', (callback) => {
    sonarqubeScanner({
        serverUrl: 'http://localhost:9000',
        token: '',
        options: {
        },
    }, callback);
});
