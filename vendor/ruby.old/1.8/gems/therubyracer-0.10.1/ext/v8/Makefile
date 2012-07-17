
SHELL = /bin/sh

#### Start of system configuration section. ####

srcdir = .
topdir = /opt/bitnami/ruby/lib/ruby/1.8/x86_64-linux
hdrdir = $(topdir)
VPATH = $(srcdir):$(topdir):$(hdrdir)
prefix = $(DESTDIR)/opt/bitnami/ruby
exec_prefix = $(prefix)
sitedir = $(libdir)/ruby/site_ruby
mandir = $(datarootdir)/man
dvidir = $(docdir)
sbindir = $(exec_prefix)/sbin
localedir = $(datarootdir)/locale
vendorarchdir = $(vendorlibdir)/$(sitearch)
pdfdir = $(docdir)
datadir = $(datarootdir)
rubylibdir = $(libdir)/ruby/$(ruby_version)
bindir = $(exec_prefix)/bin
sharedstatedir = $(prefix)/com
sitelibdir = $(sitedir)/$(ruby_version)
sysconfdir = $(prefix)/etc
libdir = $(exec_prefix)/lib
htmldir = $(docdir)
vendordir = $(libdir)/ruby/vendor_ruby
psdir = $(docdir)
sitearchdir = $(sitelibdir)/$(sitearch)
libexecdir = $(exec_prefix)/libexec
oldincludedir = $(DESTDIR)/usr/include
localstatedir = $(prefix)/var
infodir = $(datarootdir)/info
includedir = $(prefix)/include
docdir = $(datarootdir)/doc/$(PACKAGE)
datarootdir = $(prefix)/share
archdir = $(rubylibdir)/$(arch)
vendorlibdir = $(vendordir)/$(ruby_version)

CC = gcc
LIBRUBY = $(LIBRUBY_A)
LIBRUBY_A = lib$(RUBY_SO_NAME)-static.a
LIBRUBYARG_SHARED = -Wl,-R -Wl,$(libdir) -L$(libdir) 
LIBRUBYARG_STATIC = -l$(RUBY_SO_NAME)-static

RUBY_EXTCONF_H = 
CFLAGS   =  -fPIC -I/opt/bitnami/common/include -m64 -fPIC -I/bitnami/megastack-linux-x64/output/ImageMagick/include/ImageMagick $(cflags) 
INCFLAGS = -I. -I/opt/bitnami/ruby/lib/ruby/gems/1.8/gems/libv8-3.3.10.4-x86_64-linux/lib/libv8/v8/include -I$(topdir) -I$(hdrdir) -I$(srcdir)
DEFS     = 
CPPFLAGS =  -DAI_ADDRCONFIG=0 -I/opt/bitnami/common/include -I/opt/bitnami/common/include -I/bitnami/megastack-linux-x64/output/sqlite/include -I/opt/bitnami/common/include $(DEFS) $(cppflags) -Wall -g -rdynamic
CXXFLAGS = $(CFLAGS) 
ldflags  = /opt/bitnami/ruby/lib/ruby/gems/1.8/gems/libv8-3.3.10.4-x86_64-linux/lib/libv8/build/v8/libv8.a -L. -L/bitnami/megastack-linux-x64/output/sqlite/lib -L/opt/bitnami/common/lib -L/bitnami/megastack-linux-x64/output/ImageMagick/lib -rdynamic -Wl,-export-dynamic
dldflags = 
archflag = 
DLDFLAGS = $(ldflags) $(dldflags) $(archflag)
LDSHARED = $(CXX) -shared
AR = ar
EXEEXT = 

RUBY_INSTALL_NAME = ruby
RUBY_SO_NAME = ruby
arch = x86_64-linux
sitearch = x86_64-linux
ruby_version = 1.8
ruby = /opt/bitnami/ruby/bin/ruby
RUBY = $(ruby)
RM = rm -f
MAKEDIRS = mkdir -p
INSTALL = /usr/bin/install -c
INSTALL_PROG = $(INSTALL) -m 0755
INSTALL_DATA = $(INSTALL) -m 644
COPY = cp

#### End of system configuration section. ####

preload = 

libpath = . $(libdir)
LIBPATH =  -L. -L$(libdir) -Wl,-R$(libdir)
DEFFILE = 

CLEANFILES = mkmf.log
DISTCLEANFILES = 

extout = 
extout_prefix = 
target_prefix = 
LOCAL_LIBS = 
LIBS =   -lpthread -lrt -ldl -lcrypt -lm   -lc -lpthread
SRCS = v8_locker.cpp v8.cpp v8_try_catch.cpp rr.cpp v8_callbacks.cpp v8_context.cpp v8_object.cpp v8_external.cpp v8_template.cpp v8_value.cpp v8_script.cpp v8_debug.cpp v8_date.cpp v8_string.cpp v8_array.cpp v8_message.cpp v8_weakref.cpp v8_v8.cpp v8_handle.cpp v8_exception.cpp v8_function.cpp
OBJS = v8_locker.o v8.o v8_try_catch.o rr.o v8_callbacks.o v8_context.o v8_object.o v8_external.o v8_template.o v8_value.o v8_script.o v8_debug.o v8_date.o v8_string.o v8_array.o v8_message.o v8_weakref.o v8_v8.o v8_handle.o v8_exception.o v8_function.o
TARGET = v8
DLLIB = $(TARGET).so
EXTSTATIC = 
STATIC_LIB = 

BINDIR        = $(bindir)
RUBYCOMMONDIR = $(sitedir)$(target_prefix)
RUBYLIBDIR = /home/bitnami/rocksuper/vendor/bundle/ruby/1.8/gems/therubyracer-0.10.1/lib$(target_prefix)
RUBYARCHDIR = /home/bitnami/rocksuper/vendor/bundle/ruby/1.8/gems/therubyracer-0.10.1/lib$(target_prefix)

TARGET_SO     = $(DLLIB)
CLEANLIBS     = $(TARGET).so $(TARGET).il? $(TARGET).tds $(TARGET).map
CLEANOBJS     = *.o *.a *.s[ol] *.pdb *.exp *.bak

all:		$(DLLIB)
static:		$(STATIC_LIB)

clean:
		@-$(RM) $(CLEANLIBS) $(CLEANOBJS) $(CLEANFILES)

distclean:	clean
		@-$(RM) Makefile $(RUBY_EXTCONF_H) conftest.* mkmf.log
		@-$(RM) core ruby$(EXEEXT) *~ $(DISTCLEANFILES)

realclean:	distclean
install: install-so install-rb

install-so: $(RUBYARCHDIR)
install-so: $(RUBYARCHDIR)/$(DLLIB)
$(RUBYARCHDIR)/$(DLLIB): $(DLLIB)
	$(INSTALL_PROG) $(DLLIB) $(RUBYARCHDIR)
install-rb: pre-install-rb install-rb-default
install-rb-default: pre-install-rb-default
pre-install-rb: Makefile
pre-install-rb-default: Makefile
$(RUBYARCHDIR):
	$(MAKEDIRS) $@

site-install: site-install-so site-install-rb
site-install-so: install-so
site-install-rb: install-rb

.SUFFIXES: .c .m .cc .cxx .cpp .C .o

.cc.o:
	$(CXX) $(INCFLAGS) $(CPPFLAGS) $(CXXFLAGS) -c $<

.cxx.o:
	$(CXX) $(INCFLAGS) $(CPPFLAGS) $(CXXFLAGS) -c $<

.cpp.o:
	$(CXX) $(INCFLAGS) $(CPPFLAGS) $(CXXFLAGS) -c $<

.C.o:
	$(CXX) $(INCFLAGS) $(CPPFLAGS) $(CXXFLAGS) -c $<

.c.o:
	$(CC) $(INCFLAGS) $(CPPFLAGS) $(CFLAGS) -c $<

$(DLLIB): $(OBJS) Makefile
	@-$(RM) $@
	$(LDSHARED) -o $@ $(OBJS) $(LIBPATH) $(DLDFLAGS) $(LOCAL_LIBS) $(LIBS)



$(OBJS): ruby.h defines.h
