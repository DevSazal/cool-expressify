.PHONY: help install build start clean clean-build lint lintfix test test-unit

# author: Sazal Ahamed
# the backend lover
# github: https://github.com/DevSazal
# url: https://sazal.vercel.app

#### info
help:
	@echo ""
	@echo "supported targets:"
	@echo ""
	@echo "- install: install node.js app"
	@echo ""
	@echo "- build: builds service."
	@echo ""
	@echo "- clean: cleans service, node_modules"
	@echo "  - clean-build: cleans .build folder."
	@echo ""
	@echo "- start: start node app."
	@echo ""
	@echo "- test: testing node app"
	@echo ""
	@echo "- lint: lint service for checking."
	@echo "- lintfix: lint fix service."
	@echo ""
####

#### install
install:
	@npm i

#### build
build:
	@npm run build
####

#### Start
start:
	@npm run start
####


#### clean
clean:
	@rm -rf .build node_modules package-lock.json

clean-build:
	@rm -rf .build
####



#### lint
lint:
	@npm run lint

lintfix:
	@npm run lintfix

####

#### Test
test:
	@npm run test

test-unit:
	@npm run test:unit
####
