
SHELL = /bin/sh

#### Start of system configuration section. ####

srcdir = .
topdir = /opt/bitnami/ruby/lib/ruby/1.8/x86_64-linux
hdrdir = $(topdir)
VPATH = $(srcdir):$(topdir):$(hdrdir)
prefix = $(DESTDIR)/opt/bitnami/ruby
exec_prefix = $(prefix)
dvidir = $(docdir)
mandir = $(datarootdir)/man
includedir = $(prefix)/include
pdfdir = $(docdir)
rubylibdir = $(libdir)/ruby/$(ruby_version)
sysconfdir = $(prefix)/etc
localstatedir = $(prefix)/var
oldincludedir = $(DESTDIR)/usr/include
sitearchdir = $(sitelibdir)/$(sitearch)
docdir = $(datarootdir)/doc/$(PACKAGE)
vendorlibdir = $(vendordir)/$(ruby_version)
psdir = $(docdir)
archdir = $(rubylibdir)/$(arch)
sitedir = $(libdir)/ruby/site_ruby
sharedstatedir = $(prefix)/com
sbindir = $(exec_prefix)/sbin
datadir = $(datarootdir)
htmldir = $(docdir)
localedir = $(datarootdir)/locale
libdir = $(exec_prefix)/lib
vendordir = $(libdir)/ruby/vendor_ruby
libexecdir = $(exec_prefix)/libexec
vendorarchdir = $(vendorlibdir)/$(sitearch)
datarootdir = $(prefix)/share
bindir = $(exec_prefix)/bin
sitelibdir = $(sitedir)/$(ruby_version)
infodir = $(datarootdir)/info

CC = gcc
LIBRUBY = $(LIBRUBY_A)
LIBRUBY_A = lib$(RUBY_SO_NAME)-static.a
LIBRUBYARG_SHARED = -Wl,-R -Wl,$(libdir) -L$(libdir) 
LIBRUBYARG_STATIC = -l$(RUBY_SO_NAME)-static

RUBY_EXTCONF_H = 
CFLAGS   =  -fPIC -I/opt/bitnami/common/include -m64 -fPIC -I/bitnami/megastack-linux-x64/output/ImageMagick/include/ImageMagick $(cflags) -O3 -Wall -O0 -ggdb 
INCFLAGS = -I. -I$(topdir) -I$(hdrdir) -I$(srcdir)
DEFS     = 
CPPFLAGS = -DJSON_GENERATOR -DAI_ADDRCONFIG=0 -I/opt/bitnami/common/include -I/opt/bitnami/common/include -I/bitnami/megastack-linux-x64/output/sqlite/include -I/opt/bitnami/common/include $(DEFS) $(cppflags)
CXXFLAGS = $(CFLAGS) 
ldflags  = -L. -L/bitnami/megastack-linux-x64/output/sqlite/lib -L/opt/bitnami/common/lib -L/bitnami/megastack-linux-x64/output/ImageMagick/lib -rdynamic -Wl,-export-dynamic
dldflags = 
archflag = 
DLDFLAGS = $(ldflags) $(dldflags) $(archflag)
LDSHARED = $(CC) -shared
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
target_prefix = /json/ext
LOCAL_LIBS = 
LIBS =   -lpthread -lrt -ldl -lcrypt -lm   -lc
SRCS = generator.c
OBJS = generator.o
TARGET = generator
DLLIB = $(TARGET).so
EXTSTATIC = 
STATIC_LIB = 

BINDIR        = $(bindir)
RUBYCOMMONDIR = $(sitedir)$(target_prefix)
RUBYLIBDIR = /home/bitnami/rocksuper/vendor/bundle/ruby/1.8/gems/json-1.7.3/lib$(target_prefix)
RUBYARCHDIR = /home/bitnami/rocksuper/vendor/bundle/ruby/1.8/gems/json-1.7.3/lib$(target_prefix)

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



###
generator.o: generator.c generator.h $(srcdir)/../fbuffer/fbuffer.h
