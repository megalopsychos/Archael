void calculate()
// expression evaluation loop
{
while (cin) {
cout << prompt;
Token t = ts.get();
while (t.kind == print) t=ts.g et();
if (t.kind == quit)
return;
ts.putback(t);
cout << result << expression() << '\n';
// first discard all "prints"
AA
}
}
int main()
tr y {
calculate();
return 0;
}
catch (runtime_error& e) {
cerr << e.what() << '\n';
return 1;
}
catch (...) {
cerr << "exception \n";
return 2;
}